CREATE TABLE IF NOT EXISTS "type" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" varchar(128) NOT NULL,
	CONSTRAINT "type_value_unique" UNIQUE("value")
);
--> statement-breakpoint
ALTER TABLE "colors" ALTER COLUMN "name" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "colors" ALTER COLUMN "value" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "products" ADD COLUMN "type" integer;--> statement-breakpoint
ALTER TABLE "colors" ADD CONSTRAINT "colors_value_unique" UNIQUE("value");--> statement-breakpoint
ALTER TABLE "sizes" ADD CONSTRAINT "sizes_value_unique" UNIQUE("value");