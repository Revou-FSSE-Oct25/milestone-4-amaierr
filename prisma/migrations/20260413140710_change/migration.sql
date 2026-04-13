/*
  Warnings:

  - The primary key for the `accounts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `account_number` on the `accounts` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `VarChar(10)`.
  - You are about to alter the column `account_number` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `VarChar(10)`.
  - You are about to alter the column `transfer_to` on the `transactions` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `VarChar(10)`.

*/
-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_account_number_fkey";

-- DropForeignKey
ALTER TABLE "transactions" DROP CONSTRAINT "transactions_transfer_to_fkey";

-- AlterTable
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_pkey",
ALTER COLUMN "account_number" SET DATA TYPE VARCHAR(10),
ADD CONSTRAINT "accounts_pkey" PRIMARY KEY ("account_number");

-- AlterTable
ALTER TABLE "transactions" ALTER COLUMN "account_number" SET DATA TYPE VARCHAR(10),
ALTER COLUMN "transfer_to" SET DATA TYPE VARCHAR(10);

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_account_number_fkey" FOREIGN KEY ("account_number") REFERENCES "accounts"("account_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_transfer_to_fkey" FOREIGN KEY ("transfer_to") REFERENCES "accounts"("account_number") ON DELETE SET NULL ON UPDATE CASCADE;
