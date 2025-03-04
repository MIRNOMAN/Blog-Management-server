import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  content: z.string().min(10, "Content must be at least 10 characters long"),
});

export const updatePostSchema = z.object({
  title: z.string().min(3).optional(),
  content: z.string().min(10).optional(),
});
