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

  public PATCH = (path: string, formData: any): Promise<Response> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify(formData);
    return fetch(process.env.REACT_APP_API + path, {
      method: "PATCH",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    }).then((response) => {
      if (response.ok !== true) {
        return response.json().then((text) => {
          throw new Error(
            text?.errorResult?.errorMessage?.includes("authorized")
              ? "You are not authorized"
              : text?.errorResult?.errorMessage
          );
        });
      } else {
        return response.json();
      }
    });
  };

  public DELETE = (path: string): Promise<Response> => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    return fetch(process.env.REACT_APP_API + path, {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow",
    }).then((response) => {
      if (response.ok !== true) {
        return response.json().then((text) => {
          throw new Error(
            text?.errorResult?.errorMessage?.includes("authorized")
              ? "You are not authorized"
              : text?.errorResult?.errorMessage
          );
        });
      } else {
        return response.json();
      }
    });
  };
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new Utilities();
