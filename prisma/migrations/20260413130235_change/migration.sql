/*
  Warnings:

  - The primary key for the `accounts` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_account_number_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_transfer_to_fkey";

-- AlterTable
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_pkey",
ALTER COLUMN "account_number" SET DATA TYPE BIGINT,
ADD CONSTRAINT "accounts_pkey" PRIMARY KEY ("account_number");

-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "account_number" SET DATA TYPE BIGINT,
ALTER COLUMN "transfer_to" SET DATA TYPE BIGINT;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_account_number_fkey" FOREIGN KEY ("account_number") REFERENCES "accounts"("account_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_transfer_to_fkey" FOREIGN KEY ("transfer_to") REFERENCES "accounts"("account_number") ON DELETE SET NULL ON UPDATE CASCADE;
