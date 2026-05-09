const exceljs = require('exceljs');
async function read_excel()
{
    let output = {row:-1,col:-1};
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile("/Users/L053981/Excel_Demo/practice1.xlsx");
    const worksheet = workbook.getWorksheet("Sheet1");

    worksheet.eachRow((row,row_num)=>{
        row.eachCell((cell,col_num)=>{
            console.log(cell.value);
            if(cell.value === "Banana")
            {
                output.row = row_num;
                output.col = col_num;
            }
        });
    });
    const cell = worksheet.getCell(output.row,output.col);
    cell.value = "Republic";
    await workbook.xlsx.writeFile("/Users/L053981/Excel_Demo/practice1.xlsx");
}
read_excel();
