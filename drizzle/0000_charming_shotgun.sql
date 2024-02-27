DO $$ BEGIN
 CREATE TYPE "roles" AS ENUM('ADMIN', 'USER');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "account" (
	"userId" text NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"providerAccountId" text NOT NULL,
	"refresh_token" text,
	"access_token" text,
	"expires_at" integer,
	"token_type" text,
	"scope" text,
	"id_token" text,
	"session_state" text,
	CONSTRAINT "account_provider_providerAccountId_pk" PRIMARY KEY("provider","providerAccountId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "colors" (
	"id" "smallserial" PRIMARY KEY NOT NULL,
	"name" varchar(128) NOT NULL,
	"value" varchar(128) NOT NULL,
	CONSTRAINT "colors_name_unique" UNIQUE("name"),
	CONSTRAINT "colors_value_unique" UNIQUE("value")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"type" integer,
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
CREATE TABLE IF NOT EXISTS "productsToStyles" (
	"productId" integer NOT NULL,
	"styleId" integer NOT NULL,
	CONSTRAINT "productsToStyles_productId_styleId_pk" PRIMARY KEY("productId","styleId")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "session" (
	"sessionToken" text PRIMARY KEY NOT NULL,
	"userId" text NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sizes" (
	"id" "smallserial" PRIMARY KEY NOT NULL,
	"value" varchar(128) NOT NULL,
	CONSTRAINT "sizes_value_unique" UNIQUE("value")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "styles" (
	"id" "smallserial" PRIMARY KEY NOT NULL,
	"value" varchar(128) NOT NULL,
	CONSTRAINT "styles_value_unique" UNIQUE("value")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "types" (
	"id" serial PRIMARY KEY NOT NULL,
	"value" varchar(128) NOT NULL,
	CONSTRAINT "types_value_unique" UNIQUE("value")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" char(21) PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"email" varchar(256) NOT NULL,
	"emailVerified" timestamp,
	"password" varchar NOT NULL,
	"role" "roles" DEFAULT 'USER',
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verificationToken" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verificationToken_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "products" ADD CONSTRAINT "products_type_types_id_fk" FOREIGN KEY ("type") REFERENCES "types"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
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
DO $$ BEGIN
 ALTER TABLE "session" ADD CONSTRAINT "session_userId_users_id_fk" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
