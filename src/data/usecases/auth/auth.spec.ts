interface HttpPostClient {
  post(url: string): Promise<void>;
}

class Auth {
  constructor(
    private readonly url: string,
    private readonly HttpPostClient: HttpPostClient
  ) {}
  async auth(): Promise<void> {
    await this.HttpPostClient.post(this.url);
  }
}

describe("Auth", () => {
  test("Shoud call httpPostClient with correct URL", async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;
      async post(url: string): Promise<void> {
        this.url = url;
      }
    }

    const url = "any_url";
    const httpPostClient = new HttpPostClientSpy();
    const sut = new Auth(url, httpPostClient);
    await sut.auth();
    expect(httpPostClient.url).toBe(url);
  });
});
