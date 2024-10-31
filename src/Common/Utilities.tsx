class Utilities {
  public GET = (path: string): Promise<Response> => {
    return fetch(process.env.REACT_APP_API + path, {
      method: "GET",
      headers: {},
    }).then((res) => {
      if (res.ok !== true) {
        return res.json().then((text) => {
          throw new Error(
            text?.errorResult?.errorMessage?.includes("authorized")
              ? "You are not authorized"
              : text?.errorResult?.errorMessage
          );
        });
      } else {
        return res.json();
      }
    });
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Utilities();
