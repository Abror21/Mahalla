import { Pagination as UIPagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import "./index.css";

const Pagination = () => {
  return (
    <div>
      <Stack spacing={2}>
        <UIPagination count={11} siblingCount={0} />
      </Stack>
    </div>
  );
};

export default Pagination;
