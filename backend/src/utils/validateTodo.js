//backend/utils/validateTodo.js
import { z } from "zod";

const todoSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title too long"),

  description: z.string().optional(),

  priority: z.enum(["Low", "Medium", "High"], {
    errorMap: () => ({ message: "Invalid priority" }),
  }),

  category: z.enum(["Work", "Personal", "Study"], {
    errorMap: () => ({ message: "Invalid category" }),
  }),

  dueDate: z
    .string()
    .optional()
    .refine((value) => {
      if (!value) return true;

      const due = new Date(value);
      if (isNaN(due.getTime())) return false;

      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return due >= today;
    }, {
      message: "Due date cannot be in the past",
    }),
});

export function validateTodo(todo) {
  const result = todoSchema.safeParse(todo);

  if (!result.success) {
    console.log(error);
    return result.error.issues[0].message;
  }

  return null;
}
