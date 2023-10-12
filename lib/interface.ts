export interface IPost {
    title: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body: any;
    _id: string;
    slug: {
      current: string;
    };
    _createdAt: string;
  }