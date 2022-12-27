export class AppService {
    public async getHello(): Promise<any> {
        const response = await fetch('/');
        return response.json
    }
}
