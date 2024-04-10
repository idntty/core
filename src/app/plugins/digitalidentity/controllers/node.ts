import { BasePlugin } from 'lisk-sdk';


export const info = (apiClient: BasePlugin['apiClient']) => async (request, response): Promise<void> => {
    try {
        const nodeInfo = await apiClient.invoke('system_getNodeInfo');
        response
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(nodeInfo)
    } catch (errorCode) {
        response
            .code(500)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({'error':errorCode})
    }    
};

export const metrics = (apiClient: BasePlugin['apiClient']) => async (request, response): Promise<void> => {
    try {
        const nodeMetrics = await apiClient.invoke('system_getMetricsReport');
        response
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(nodeMetrics)
    } catch (errorCode) {
        response
            .code(500)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({'error':errorCode})
    }    
};

export const schema = (apiClient: BasePlugin['apiClient']) => async (request, response): Promise<void> => {
    try {
        const nodeSchema = await apiClient.invoke('system_getSchema');
        response
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(nodeSchema)
    } catch (errorCode) {
        response
            .code(500)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({'error':errorCode})
    }    
};

export const metadata = (apiClient: BasePlugin['apiClient']) => async (request, response): Promise<void> => {
    try {
        const nodeMetadata = await apiClient.invoke('system_getMetadata');
        response
            .code(200)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send(nodeMetadata)
    } catch (errorCode) {
        response
            .code(500)
            .header('Content-Type', 'application/json; charset=utf-8')
            .send({'error':errorCode})
    }    
};