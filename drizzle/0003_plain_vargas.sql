CREATE TABLE IF NOT EXISTS "productsToStyles" (
	"productId" integer NOT NULL,
	"styleId" integer NOT NULL,
	CONSTRAINT "productsToStyles_productId_styleId_pk" PRIMARY KEY("productId","styleId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "styles" (
	"id" "smallserial" PRIMARY KEY NOT NULL,
	"value" varchar(128) NOT NULL,
	CONSTRAINT "styles_value_unique" UNIQUE("value")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_type_types_id_fk" FOREIGN KEY ("type") REFERENCES "types"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productsToStyles" ADD CONSTRAINT "productsToStyles_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productsToStyles" ADD CONSTRAINT "productsToStyles_styleId_styles_id_fk" FOREIGN KEY ("styleId") REFERENCES "styles"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "colors" ADD CONSTRAINT "colors_name_unique" UNIQUE("name");