import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../apis/userApi";
import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailure,
} from "../store/reducers";
import { RootState } from "@/store/store";

const UpdateButton = () => {
  const dispatch = useDispatch();
  const { name, email, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  const handleFetchUser = async () => {
    dispatch(fetchUserStart());
    try {
      const data = await fetchUserData("123");
      dispatch(fetchUserSuccess(data));
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      dispatch(fetchUserFailure(err.message));
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleFetchUser}
        disabled={loading}
      >
        Fetch User Data
      </Button>
      {loading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {name && <Typography>Name: {name}</Typography>}
      {email && <Typography>Email: {email}</Typography>}
    </div>
  );
};

export default UpdateButton;
