import  { useState } from "react";

const UploadFile = () => {
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const handleImageChange = (event) => {
    // Handle image file selection
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handlePdfChange = (event) => {
    // Handle PDF file selection
    const file = event.target.files[0];
    setPdfFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a FormData object to send files and data to the server
    const formData = new FormData();
    formData.append("description", description);
    formData.append("image", imageFile);
    formData.append("pdf", pdfFile);

    // Send the FormData to your server using fetch or Axios
    try {
      const response = await fetch("http://localhost:5000/api/v1/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        // File uploaded successfully
        console.log("File uploaded successfully");
      } else {
        // Handle error
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />
        <input
          type="file"
          name="pdf"
          accept=".pdf"
          onChange={handlePdfChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default UploadFile;
