import { HttpPostClientSpy } from "../../test/mock-http-client";
import { Auth } from "./auth";

type SutTypes = {
  sut: Auth;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = "any_url"): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new Auth(url, httpPostClientSpy);

  return {
    sut,
    httpPostClientSpy,
  };
};

describe("Auth", () => {
  test("Shoud call httpPostClient with correct URL", async () => {
    const url = "other_url";
    const { httpPostClientSpy, sut } = makeSut(url);

    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
