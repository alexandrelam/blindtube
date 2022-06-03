import { Snackbar, Alert } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  label: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  type: "success" | "error" | "warning" | "info";
};

export function Notification({ label, open, setOpen, type }: Props) {
  const [snackbarState, setSnackbarState] = useState<{
    open: boolean;
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
  }>({
    open,
    vertical: "top",
    horizontal: "center",
  });

  function handleSnackbarClose() {
    setOpen(false);
    setSnackbarState({
      ...snackbarState,
      open: false,
    });
  }

  useEffect(() => {
    setSnackbarState({
      ...snackbarState,
      open,
    });
  }, [open]);

  return (
    <Snackbar
      open={snackbarState.open}
      autoHideDuration={3000}
      onClose={handleSnackbarClose}
      anchorOrigin={{
        vertical: snackbarState.vertical,
        horizontal: snackbarState.horizontal,
      }}
    >
      <Alert
        onClose={handleSnackbarClose}
        severity={type}
        sx={{ width: "100%" }}
      >
        {label}
      </Alert>
    </Snackbar>
  );
}
