import supabase from "./supabase_client";

export const uploadRecruiterPhoto =
async (file) => {

  const fileName =
    `${Date.now()}-${file.name}`;

  const { error } =
    await supabase.storage
      .from("profilepicture")
      .upload(fileName, file);

  if (error) throw error;

  return supabase.storage
    .from("profilepicture")
    .getPublicUrl(fileName)
    .data.publicUrl;
};

export const uploadCompanyLogo =
async (file) => {

  const fileName =
    `${Date.now()}-${file.name}`;

  const { error } =
    await supabase.storage
      .from("companylogo")
      .upload(fileName, file);

  if (error) throw error;

  return supabase.storage
    .from("companylogo")
    .getPublicUrl(fileName)
    .data.publicUrl;
};