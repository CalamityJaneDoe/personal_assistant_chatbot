export type Conversation = {
  id: string;
  title: string;
  agent: {
    name: string;
    avatar: string;
  };
  isActive?: boolean;
};
