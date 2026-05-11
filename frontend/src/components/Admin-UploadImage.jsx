import React, { useState } from "react";
import { FaImage } from "react-icons/fa";

export default function ClinicImageUpload() {

  // لتخزين الصورة المختارة
  const [preview, setPreview] = useState(null);

  // عند اختيار صورة
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
    }
  };

  return (
    <div className="col-md-6">

      {/* Title */}
      <label className="form-label">
        Clinic Image
      </label>

      {/* Input مخفي */}
      <input
        type="file"
        id="clinicImage"
        hidden
        accept="image/*"
        onChange={handleImageChange}
      />

      {/* Box */}
      <label
        htmlFor="clinicImage"
        className="border border-2 border-secondary-subtle rounded-4 bg-light d-flex flex-column justify-content-center align-items-center overflow-hidden"
        style={{
          borderStyle: "dashed",
          cursor: "pointer",
          minHeight: "220px",
        }}
      >

        {/* إذا في صورة */}
        {preview ? (
          <img
            src={preview}
            alt="Clinic"
            className="w-100 h-100 object-fit-cover rounded-4"
            style={{ maxHeight: "220px" }}
          />
        ) : (
          <>
            <FaImage size={35} className="text-secondary mb-3" />

            <p className="small text-muted mb-0">
              Drop image here or click to upload
            </p>
          </>
        )}

      </label>
    </div>
  );
}