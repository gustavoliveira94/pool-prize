import { useToast as useToasts } from "@chakra-ui/react";

interface IToast {
  title: string;
  description?: string;
  position:
    | "top"
    | "top-left"
    | "top-right"
    | "bottom"
    | "bottom-left"
    | "bottom-right";
  status: "info" | "warning" | "success" | "error" | "loading";
}

export const useToast = () => {
  const toasts = useToasts();

  const toast = ({ title, description, position, status }: IToast) => {
    return toasts({
      title,
      description,
      status,
      duration: 9000,
      isClosable: true,
      position,
    });
  };

  return { toast };
};
