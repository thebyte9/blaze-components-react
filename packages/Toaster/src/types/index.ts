export type messageType = "warning" | "error" | "info" | "success";

export interface IMessage {
  id: string;
  message: string;
  type: messageType;
}
