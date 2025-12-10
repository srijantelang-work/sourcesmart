
"use client";

import React, { useCallback } from 'react';
import {
    ReactFlow,
    useNodesState,
    useEdgesState,
    addEdge,
    Handle,
    Position,
    Connection,
    Edge,
    MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Container } from './ui/Container';
import { motion } from 'framer-motion';
import { Bot, Database, FileText, Globe, ShoppingCart, Zap } from 'lucide-react';

const CustomNode = ({ data }: { data: { label: string; icon: any; sub: string; handles?: { source?: boolean; target?: boolean } } }) => {
    const Icon = data.icon;
    return (
        <div className="px-4 py-3 shadow-sm rounded-xl bg-white dark:bg-zinc-900 border border-border/50 w-[200px] transition-shadow hover:shadow-md">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-secondary text-primary">
                    <Icon size={16} />
                </div>
                <div>
                    <div className="text-sm font-bold text-foreground">{data.label}</div>
                    <div className="text-[10px] text-muted-foreground">{data.sub}</div>
                </div>
            </div>

            {/* Conditionally Render Handles */}
            {data.handles?.target && (
                <Handle type="target" position={Position.Left} className="!bg-primary !w-2 !h-2 !border-background" />
            )}
            {data.handles?.source && (
                <Handle type="source" position={Position.Right} className="!bg-primary !w-2 !h-2 !border-background" />
            )}
        </div>
    );
};

const nodeTypes = {
    custom: CustomNode,
};

const initialNodes = [
    {
        id: '1',
        type: 'custom',
        data: { label: 'ERP System', icon: Database, sub: 'Inventory Needs', handles: { source: true } },
        position: { x: 0, y: 50 },
    },
    {
        id: '2',
        type: 'custom',
        data: { label: 'Market Data', icon: Globe, sub: 'Live Pricing', handles: { source: true } },
        position: { x: 0, y: 180 },
    },
    {
        id: '3',
        type: 'custom',
        data: { label: 'SourceSmart AI', icon: Bot, sub: 'Processing...', handles: { source: true, target: true } },
        position: { x: 350, y: 115 },
    },
    {
        id: '4',
        type: 'custom',
        data: { label: 'Verified Suppliers', icon: ShoppingCart, sub: 'Best Matches', handles: { target: true } },
        position: { x: 700, y: 50 },
    },
    {
        id: '5',
        type: 'custom',
        data: { label: 'Smart Contract', icon: FileText, sub: 'Auto-Generated', handles: { target: true } },
        position: { x: 700, y: 180 },
    },
];

const initialEdges = [
    { id: 'e1-3', source: '1', target: '3', animated: true, style: { stroke: '#6366f1' } }, // Indigo 500
    { id: 'e2-3', source: '2', target: '3', animated: true, style: { stroke: '#6366f1' } },
    { id: 'e3-4', source: '3', target: '4', animated: true, style: { stroke: '#6366f1' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' } },
    { id: 'e3-5', source: '3', target: '5', animated: true, style: { stroke: '#6366f1' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#6366f1' } },
];

export function WorkflowSection() {
    const [nodes, , onNodesChange] = useNodesState(initialNodes);
    const [edges, , onEdgesChange] = useEdgesState(initialEdges);

    return (
        <section id="workflow" className="py-24 relative overflow-hidden bg-background">
            {/* Background Grid - Seamless with Hero */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            <Container className="relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
                            Orchestrate your entire <span className="text-primary">sourcing pipeline</span>
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            Connect your internal data with global market intelligence automatically.
                        </p>
                    </motion.div>
                </div>

                {/* Desktop Diagram */}
                <div className="hidden md:block h-[400px] w-full bg-secondary/30 dark:bg-white/5 rounded-2xl border border-border/50 overflow-hidden relative backdrop-blur-sm">
                    <ReactFlow
                        nodes={nodes}
                        edges={edges}
                        nodeTypes={nodeTypes}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        fitView
                        proOptions={{ hideAttribution: true }}
                        className="bg-transparent"
                        minZoom={0.5}
                        maxZoom={1.5}
                        zoomOnScroll={false}
                        panOnDrag={false}
                        zoomOnPinch={false}
                        zoomOnDoubleClick={false}
                        nodesDraggable={false}
                        preventScrolling={false}
                    >
                    </ReactFlow>

                    <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] rounded-2xl" />
                </div>

                {/* Mobile Vertical List */}
                <div className="md:hidden flex flex-col gap-6 relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[28px] top-6 bottom-6 w-0.5 bg-border border-l border-dashed border-primary/30" />

                    {[...initialNodes].sort((a, b) => a.position.x - b.position.x).map((node, i) => {
                        const Icon = node.data.icon;
                        return (
                            <div key={node.id} className="relative z-10 flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-secondary/50 border border-border flex items-center justify-center shrink-0">
                                    <Icon size={24} className="text-primary" />
                                </div>
                                <div className="bg-card/50 p-4 rounded-xl border border-border/50 flex-1 backdrop-blur-sm">
                                    <div className="font-bold text-foreground">{node.data.label}</div>
                                    <div className="text-sm text-muted-foreground">{node.data.sub}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </Container>
        </section>
    );
}
