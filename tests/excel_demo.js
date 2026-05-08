const exceljs = require('exceljs');
async function read_excel()
{
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile("/Users/L053981/Excel_Demo/practice1.xlsx");
    const worksheet = workbook.getWorksheet("Sheet1");

    worksheet.eachRow((row,row_num)=>{
        row.eachCell((cell,col_num)=>{
            console.log(cell.value);
        });
    });
}
read_excel();
