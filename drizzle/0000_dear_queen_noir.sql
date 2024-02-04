CREATE TABLE IF NOT EXISTS "colors" (
	"id" "smallserial" PRIMARY KEY NOT NULL,
	"name" varchar(128),
	"value" varchar(128)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"rating" numeric(2, 1) DEFAULT '0',
	"price" integer NOT NULL,
	"discount" integer,
	"discountPrice" integer,
	"description" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "productsToColors" (
	"productId" integer NOT NULL,
	"colorId" integer NOT NULL,
	CONSTRAINT "productsToColors_productId_colorId_pk" PRIMARY KEY("productId","colorId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "productsToSizes" (
	"productId" integer NOT NULL,
	"sizeId" integer NOT NULL,
	CONSTRAINT "productsToSizes_productId_sizeId_pk" PRIMARY KEY("productId","sizeId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sizes" (
	"id" "smallserial" PRIMARY KEY NOT NULL,
	"value" varchar(128) NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productsToColors" ADD CONSTRAINT "productsToColors_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productsToColors" ADD CONSTRAINT "productsToColors_colorId_colors_id_fk" FOREIGN KEY ("colorId") REFERENCES "colors"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productsToSizes" ADD CONSTRAINT "productsToSizes_productId_products_id_fk" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "productsToSizes" ADD CONSTRAINT "productsToSizes_sizeId_sizes_id_fk" FOREIGN KEY ("sizeId") REFERENCES "sizes"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
