const exceljs = require('exceljs');
async function write_excel(search_value,replace_value,change_value,file_path)
{
    const workbook = new exceljs.Workbook();
    await workbook.xlsx.readFile(file_path);
    const worksheet = workbook.getWorksheet("Sheet1");
    const output = await read_excel(worksheet,search_value,change_value);
    const cell = worksheet.getCell(output.row,output.col+change_value.col_change);
    cell.value = replace_value;
    await workbook.xlsx.writeFile(file_path);
}
async function read_excel(worksheet, search_value)
{
    let output = {row:-1,col:-1};
    worksheet.eachRow((row,row_num)=>{
        row.eachCell((cell,col_num)=>{
            if(cell.value === search_value)
            {
                output.row = row_num;
                output.col = col_num;
            }
        });
    });
    return output;
}
write_excel("Samsung",350,{row_change:0,col_change:2},"/Users/L053981/Excel_Demo/practice1.xlsx");
