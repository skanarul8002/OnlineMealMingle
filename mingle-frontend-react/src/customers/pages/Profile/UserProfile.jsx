import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, TextField, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, updateUserProfile } from "../../../State/Authentication/Action";

const UserProfile = () => {
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (auth.user) {
      setFormData({
        fullName: auth.user.fullName || "",
        email: auth.user.email || "",
        phone: auth.user.phone || "",
      });
    }
  }, [auth.user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await dispatch(updateUserProfile(formData, auth.jwt));
      setEditing(false);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center text-center px-5">
      <div className="flex flex-col items-center justify-center w-full max-w-md">
        <AccountCircleIcon sx={{ fontSize: "9rem" }} />
        {!editing ? (
          <>
            <h1 className="py-5 text-2xl font-semibold">{formData.fullName}</h1>
            <p>Email: {formData.email}</p>
            <p>Phone: {formData.phone || "Not provided"}</p>
            <div className="flex gap-3 mt-5">
              <Button variant="contained" onClick={() => setEditing(true)}>
                Edit Profile
              </Button>
              <Button variant="outlined" color="error" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </>
        ) : (
          <>
            <TextField
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <div className="flex gap-3 mt-5 justify-center">
              <Button variant="contained" onClick={handleSave} disabled={loading}>
                {loading ? <CircularProgress size={24} /> : "Save"}
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => setEditing(false)}
                disabled={loading}
              >
                Cancel
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
