ALTER TABLE "type" RENAME TO "types";--> statement-breakpoint
ALTER TABLE "types" DROP CONSTRAINT "type_value_unique";--> statement-breakpoint
ALTER TABLE "types" ADD CONSTRAINT "types_value_unique" UNIQUE("value");