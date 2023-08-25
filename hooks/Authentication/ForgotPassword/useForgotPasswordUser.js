import { useMutation } from "@apollo/client";
import ForgotPasswordUserMutation from "./forgotPasswordUser.gql";
import useViewer from "hooks/viewer/useViewer";
/**
 * Gets current viewer's data
 *
 * @returns {Array} the viewer's data
 */
export default function useForgotPasswordUser() {
  const [viewer, , refetchViewer] = useViewer();
  const [forgotPasswordUserFunction, { data, loading }] = useMutation(
    ForgotPasswordUserMutation,
    {
      onCompleted() {
        console.log("Forgot Password successful check your mail for otp");
      },
    }
  );
  return [forgotPasswordUserFunction, loading];
}
