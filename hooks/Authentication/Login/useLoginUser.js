import { useMutation } from "@apollo/client";
import LoginUserMutation from "./loginUser.gql";
import useViewer from "hooks/viewer/useViewer";
/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useLoginUser() {
  const [viewer, , refetchViewer] = useViewer();
  const [loginUserFunction, { data, loading }] = useMutation(
    LoginUserMutation,
    {
      onCompleted() {
        console.log("User successfully Logged In Go to homepage ", viewer._id);
      },
    }
  );
  return [loginUserFunction, loading];
}
