import React, { useCallback, useEffect, useRef, useState } from 'react';
import { inject, observer } from 'mobx-react';
import SessionStore from '../../stores/sessionStore';
import Stores from '../../stores/storeIdentifier';
import 'reactflow/dist/style.css';
import './index.css';
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  MiniMap,
  BackgroundVariant,
} from 'reactflow';
import FlowType from '../../components/Flow';
import {
  Button,
  Drawer,
  Flex,
  FloatButton,
  Modal,
  Skeleton,
  Typography,
  message,
} from 'antd';
import {
  ApartmentOutlined,
  BuildOutlined,
  ClearOutlined,
  CopyOutlined,
  ExclamationCircleOutlined,
  InteractionOutlined,
  RightCircleOutlined,
  SaveOutlined,
  ShareAltOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import NoteTemplate from '../../components/Flow/nodeTemplate';
import { decodeRawData, encodeRawData } from '../../lib/abpUtility';
import { handleFlowData } from './flowHandler';
import FlowTypeStore from '../../stores/flowTypeStore';
import { useHistory } from 'react-router-dom';

interface DashboardProps {
  sessionStore?: SessionStore;
  flowTypeStore: FlowTypeStore;
}

declare var abp: any;

const Flow: React.FC<DashboardProps> = (props) => {
  props.sessionStore?.currentLogin;
  var nodeTypes = FlowType.nodeTypes;
  const confirm = Modal.confirm;
  const reactFlowWrapper = useRef<any>(null);
  const connectingNodeId = useRef<any>(null);
  const [workflowId] = useState<number>((props as any).match?.params?.id ?? 0);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [open, setOpen] = useState(false);
  //workflowSchema || resultSchema
  const [openType, setOpenType] = useState('workflowSchema');
  const [messageApi, contextHolder] = message.useMessage({});
  const [skeleton, setSkeleton] = useState(true);
  const history = useHistory();

  useEffect(() => {
    getWorkflowById();
    window.addEventListener('keydown', handleSaveHotkey);
    window.addEventListener('keydown', handleBuildHotkey);
    window.addEventListener('keydown', runWorkflowHotkey);
    return () => {
      window.removeEventListener('keydown', handleSaveHotkey);
      window.removeEventListener('keydown', handleBuildHotkey);
      window.removeEventListener('keydown', runWorkflowHotkey);
    };
  }, []);

  const runWorkflowHotkey = async (event: KeyboardEvent) => {
    if (event.altKey && event.key.toLocaleLowerCase() === 'r') {
      await runWorkflow(event);
      event.preventDefault();
    }
  };

  const handleSaveHotkey = (event: KeyboardEvent) => {
    if (event.altKey && event.key.toLocaleLowerCase() === 's') {
      onSaveFlow(event);
      event.preventDefault();
    }
  };

  const handleBuildHotkey = (event: KeyboardEvent) => {
    if (event.altKey && event.key.toLocaleLowerCase() === 'b') {
      onBuild(event);
      event.preventDefault();
    }
  };

  const getWorkflowById = async () => {
    await props.flowTypeStore.getWorkflowById(workflowId).then((result) => {
      if (result == null) {
        history.push({
          pathname: '/workflow',
        });
        return;
      }
      const cookieValue = decodeRawData(result.rawData ?? '');
      if (cookieValue) {
        const data = JSON.parse(cookieValue);
        data?.nodes?.forEach((item: any) => {
          item.data.onDelete = () => {
            onDeleteNode(item);
          };
        });
        setNodes(data.nodes ?? []);
        setEdges(data.edges ?? []);
      }
    });

    setSkeleton(false);
  };

  const onEdgeDoubleClick = (event: React.MouseEvent, edge: Edge) => {
    var items = edges.filter((item) => item.id !== edge.id);
    setEdges(items);
  };

  const onConnect = useCallback((params: any) => {
    setEdges((eds) =>
      addEdge(
        { ...params, animated: false, type: 'smoothstep', style: { stroke: 'darkblue' } },
        eds
      )
    );
  }, []);

  const onConnectStart = useCallback((_, { nodeId }) => {
    connectingNodeId.current = nodeId;
  }, []);

  const onConnectEnd = useCallback((event: any) => {
    const targetIsPane = event.target.classList.contains('react-flow__pane');
    if (targetIsPane) {
    }
  }, []);

  const edgesWithUpdatedTypes = edges.map((edge) => {
    if (edge.sourceHandle) {
    }
    return edge;
  });

  const onDeleteNode = (node: any) => {
    let currentNode: any = [];
    let currentEdge: any = [];
    setNodes((nds) => {
      const result = nds.filter((item) => item.id !== node.id);
      currentNode = result;
      return result;
    });
    setEdges((eds) => {
      const result = eds.filter((item) => item.source !== node.id && item.target !== node.id);
      currentEdge = result;
      return result;
    });
  };

  const onAddCondition = (e: any) => {
    const node = NoteTemplate.ConditionNode();
    node.data.onDelete = (e: any) => {
      setNodes((nds) => nds.filter((item) => item.id !== node.id));
      setEdges((eds) => eds.filter((item) => item.source !== node.id && item.target !== node.id));
    };
    setNodes((nds) => nds.concat(node));
  };

  const onAddAction = (e: any) => {
    const node = NoteTemplate.ActionNode();
    node.data.onDelete = (e: any) => {
      setNodes((nds) => nds.filter((item) => item.id !== node.id));
      setEdges((eds) => eds.filter((item) => item.source !== node.id && item.target !== node.id));
    };
    setNodes((nds) => nds.concat(node));
  };

  const onAddRule = (e: any) => {
    const node = NoteTemplate.RuleNode();
    node.data.onDelete = (e: any) => {
      setNodes((nds) => nds.filter((item) => item.id !== node.id));
      setEdges((eds) => eds.filter((item) => item.source !== node.id && item.target !== node.id));
    };
    setNodes((nds) => nds.concat(node));
  };

  const onAddInput = (e: any) => {
    const node = NoteTemplate.InputNode();
    node.data.onDelete = () => {
      setNodes((nds) => nds.filter((item) => item.id !== node.id));
      setEdges((eds) => eds.filter((item) => item.source !== node.id && item.target !== node.id));
    };
    setNodes((nds) => nds.concat(node));
  };

  const getNodesAndEdges = () => {
    let currentNodes: any;
    let currentEdges: any;

    setNodes((nds) => {
      currentNodes = nds;
      return nds;
    });
    setEdges((eds) => {
      currentEdges = eds;
      return eds;
    });

    return { currentNodes, currentEdges };
  };

  ///Reset flow
  const onReset = (e: any) => {
    confirm({
      title: 'Do you want to clear these flow?',
      icon: <ExclamationCircleOutlined />,
      onOk: async () => {
        setNodes([]);
        setEdges([]);
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  ///Process flow
  function processFlow() {
    const { currentNodes, currentEdges } = getNodesAndEdges();
    var iter = handleFlowData(currentNodes, currentEdges);
    var curr = iter.next();
    let err = false;
    while (!curr.done) {
      curr = iter.next();
      err = true;
    }
    if (!err) {
      props.flowTypeStore.setWorkflowInfo(JSON.stringify(curr.value, null, 2) as any);
    }

    return { err, curr };
  }

  ///Save flow
  const onSaveFlow = async (e: any) => {
    messageApi.loading({
      content: `Saving flow...`,
      key: 'runFlow',
    });
    const { currentNodes, currentEdges } = getNodesAndEdges();
    var { err, curr } = await processFlow();

    const input = {
      id: workflowId,
      rawData : JSON.stringify({ nodes: currentNodes, edges: currentEdges }),
      workflowContent : !err ? JSON.stringify(curr.value.Workflow, null, 2) : '',
    };

    props.flowTypeStore.updateRawData(input).then((result) => {
      messageApi.success({
        content: `Save flow success`,
        key: 'runFlow',
      });
    });
  };

  ///Run flow
  const runWorkflow = async (e: any) => {
    messageApi.loading({
      content: `Run flow...`,
      key: 'runFlow',
    });

    var { err, curr } = await processFlow();

    if (!err) {
      var result = await props.flowTypeStore.runWorkflowAsync({
        workflowId: workflowId,
        workflowContent: JSON.stringify(curr.value.Workflow, null, 2),
        cartContent: JSON.stringify(curr.value.Cart, null, 2),
      });
      // var result = await props.flowTypeStore.activeWorkflow({
      //   workflowId: workflowId,
      //   workflowContent: JSON.stringify(curr.value.Workflow, null, 2),
      //   cartContent: JSON.stringify(curr.value.Cart, null, 2),
      // });
      if (result == null) {
        messageApi.error({
          content: `Run flow failure`,
          key: 'runFlow',
        });
        return;
      }

      setOpenType('resultSchema');
      setOpen(true);
      messageApi.open({
        key: 'runFlow',
        type: 'success',
        content: `Run flow success`,
      });

      if (result) {
        props.flowTypeStore.setWorkflowInfo(JSON.stringify(result, null, 2));
      }
    }
  };

  ///Build flow
  const onBuild = (e: any) => {
    messageApi.loading({
      content: `Building flow...`,
      key: 'runFlow',
    });

    var { err, curr } = processFlow();

    setEdges((prevEdges) =>
      prevEdges.map((edge) => {
        return { ...edge, animated: true };
      })
    );
    setTimeout(() => {
      setEdges((prevEdges) =>
        prevEdges.map((edge) => {
          return { ...edge, animated: false };
        })
      );
      messageApi.open({
        key: 'runFlow',
        type: !err ? 'success' : 'error',
        content: `Build flow  ${!err ? 'success' : 'failure'}`,
      });
      setOpenType('workflowSchema');
      setOpen(true);
    }, 500);
  };

  ///Open workflow info
  const onClose = () => {
    setOpen(false);
  };

  const nodeColor = (node: any) => {
    switch (node.type) {
      case 'ruleNode':
        return '#3AB635';
      case 'conditionNode':
        return '#F96167';
      case 'inputNode':
        return '#7A2048';
      case 'actionNode':
        return '#6865A5';
      default:
        return '#ff0072';
    }
  };

  return (
    <React.Fragment >
      {Array.from({ length: 3 }).map((_, i) => (
        <Skeleton key={i} active loading={skeleton} avatar />
      ))}
      <Skeleton className="reactflow-content reactflow-skeleton" active loading={skeleton} avatar>
        <Flex gap="small" wrap="wrap" className="btn-group ">
          {props.flowTypeStore.workflow.dealsCode?.map((item: any) => {
            return (
              <Button type="dashed" size="small" className='btn-item' onClick={() => {
                navigator.clipboard.writeText(item);
                messageApi.open({
                  key: 'copied',
                  type: 'success',
                  content: `${item} copied to clipboard`,
                });
              }} >
                {item} <CopyOutlined />
              </Button>
            );
          })}
        </Flex>

        <Drawer
          title="Workflow Info"
          placement="left"
          closable={false}
          onClose={onClose}
          open={open}
          size="large"
          key="bottom"
        >
          <Typography style={{ whiteSpace: 'pre-wrap' }}>
            {openType == 'workflowSchema'
              ? props.flowTypeStore.workflowInfo
              : props.flowTypeStore.workflowInfo}
          </Typography>
        </Drawer>

        <ReactFlow
          id="reactflow__mini"
          className="reactflow-content"
          ref={reactFlowWrapper}
          nodes={nodes}
          edges={edgesWithUpdatedTypes}
          onEdgeDoubleClick={onEdgeDoubleClick}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnectStart={onConnectStart}
          onConnectEnd={onConnectEnd}
          onConnect={onConnect}
          attributionPosition="top-right"
          snapToGrid={true}
          nodeTypes={nodeTypes}
        >
          {contextHolder}
          <Background id="1" gap={10} color="#f1f1f1" variant={BackgroundVariant.Lines} />
          <Background id="2" gap={100} offset={1} color="#ccc" variant={BackgroundVariant.Lines} />
          <Controls position="bottom-left" />
          <MiniMap
            position="bottom-right"
            style={{ right: '50px' }}
            nodeColor={nodeColor}
            nodeStrokeWidth={3}
            zoomable
            pannable
          />
        </ReactFlow>
        <FloatButton.Group
          shape="square"
          style={{ bottom: 100 }}
          className="reactflow-float-button"
        >
          <FloatButton
            icon={<ShoppingCartOutlined className="control" />}
            tooltip={<div>Add input</div>}
            onClick={onAddInput}
          />
          <FloatButton
            icon={<ApartmentOutlined className="control" />}
            tooltip={<div>Add rule</div>}
            onClick={onAddRule}
          />
          <FloatButton
            icon={<ShareAltOutlined className="control" />}
            tooltip={<div>Add condition</div>}
            onClick={onAddCondition}
          />
          <FloatButton
            icon={<InteractionOutlined className="control" />}
            tooltip={<div>Add action</div>}
            onClick={onAddAction}
          />
          <FloatButton
            icon={<BuildOutlined className="run" />}
            tooltip={<div>Build (alt + B)</div>}
            onClick={onBuild}
          />
          <FloatButton
            icon={<RightCircleOutlined className="run" />}
            tooltip={<div>Run workflow (alt + R)</div>}
            onClick={runWorkflow}
          />

          {/* <FloatButton
            icon={<AuditOutlined className="run" />}
            tooltip={<div>Result</div>}
            onClick={onBuild}
          /> */}
          
          <FloatButton
            icon={<SaveOutlined className="run " />}
            tooltip={<div>Save (alt + S)</div>}
            onClick={onSaveFlow}
          />
          <FloatButton
            icon={<ClearOutlined className="warning " />}
            tooltip={<div>Clear</div>}
            onClick={onReset}
          />
        </FloatButton.Group>
      </Skeleton>
    </React.Fragment>
  );
};

export default inject(Stores.SessionStore, Stores.FlowTypeStore)(observer(Flow));
