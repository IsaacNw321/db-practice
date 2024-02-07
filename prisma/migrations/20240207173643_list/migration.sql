-- CreateEnum
CREATE TYPE "Subject" AS ENUM ('MATH', 'HISTORY', 'CHEMICAL', 'SPORTS', 'null');

-- CreateTable
CREATE TABLE "Teacher" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "subject" "Subject" NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "fistName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_TeacherToStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TeacherToStudent_AB_unique" ON "_TeacherToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_TeacherToStudent_B_index" ON "_TeacherToStudent"("B");

-- AddForeignKey
ALTER TABLE "_TeacherToStudent" ADD CONSTRAINT "_TeacherToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeacherToStudent" ADD CONSTRAINT "_TeacherToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Teacher"("id") ON DELETE CASCADE ON UPDATE CASCADE;
