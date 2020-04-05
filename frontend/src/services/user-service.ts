import { ApiClient } from "../utils/api-client.util";
import { isSuccess, isFailure } from "../utils/remote-data";
import { Subject } from "rxjs";

const apiClient = ApiClient.create("http://localhost:4200/api");
apiClient.error$.subscribe(err => {
  //console.log("ERROR", err);
});

const loginResSub$ = new Subject<boolean>();
export const loginResponse$ = loginResSub$.asObservable();

export const login = (username: string, password: string) => {
  const body = {
    password: password,
    mobile: username
  };

  const res$ = apiClient.post<string>("/auth", body);
  res$.subscribe(res => {
    if (isFailure(res)) loginResSub$.next(false);

    if (isSuccess(res)) {
      localStorage.setItem("TOKEN", res.value);
      loginResSub$.next(true);
    }
  });
};

export default {
  login
};
