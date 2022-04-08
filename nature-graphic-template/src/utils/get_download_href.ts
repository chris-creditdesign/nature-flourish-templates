import type { Data } from "../types";

const get_download_href = (neat_headline: string, data: Data): string => {
  let column_names_array: string[] = Object.keys(data.column_names);
  let data_values_stringified_array = data.map((data_object) => {
    let data_values_stringified = column_names_array
      .map((column_name) => data_object[column_name])
      .join(",");

    return data_values_stringified;
  });

  let data_file_header = Object.values(data.column_names).join(",");
  let data_file_body = data_values_stringified_array.join("\n");

  let data_file = `${data_file_header}\n${data_file_body}`;

  let myFile = new File([data_file], `${neat_headline}.csv`, {
    type: "text/csv",
  });

  let download_href = URL.createObjectURL(myFile);

  return download_href;
};

export default get_download_href;
