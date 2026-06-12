import React, {
    useEffect,
    useState
} from "react";

import "./EditRecruiterCompany.css";

import toast from "react-hot-toast";

import useUserStore
    from "../../store/userStore";

import {
    uploadRecruiterPhoto,
    uploadCompanyLogo
} from "../../utils/uploadFiles";

import {
    getRecruiterProfile,
    updateRecruiter
} from "../../api/recruiterApi";

import {
    updateCompany
} from "../../api/companyApi";

const EditRecruiterCompany = () => {
    const profile =
        useUserStore(
            (state) => state.profile
        );
    const [loading, setLoading] =
        useState(true);

    const [recruiter, setRecruiter] = useState({
        name: "",
        designation: "",
        linkedin: "",
        profile_photo: null
    });

    const [company, setCompany] = useState({
        company_name: "",
        industry: "",
        location: "",
        website: "",
        logo_url: null,
        description: ""
    });
    useEffect(() => {

        if (!profile?.id) {
    
            setLoading(false);
            return;
    
        }
    
        fetchProfile();
    
    }, [profile]);

    const fetchProfile = async () => {

        try {

            const data =
                await getRecruiterProfile(
                    profile.id
                );

            setRecruiter({
                name:
                    data.recruiter?.name || "",
                designation:
                    data.recruiter?.designation || "",
                linkedin:
                    data.recruiter?.linkedin || "",
                profile_photo:
                    data.recruiter?.profile_photo || null
            });

            setCompany({
                company_name:
                    data.company?.company_name || "",
                industry:
                    data.company?.industry || "",
                location:
                    data.company?.location || "",
                website:
                    data.company?.website || "",
                logo_url:
                    data.company?.logo_url || null,
                description:
                    data.company?.description || ""
            });

        } catch (error) {

            console.error(error);

            toast.error(
                "Failed to load profile"
            );

        } finally {

            setLoading(false);

        }

    };

    const handleRecruiterChange = (e) => {

        const { name, value } = e.target;

        setRecruiter((prev) => ({
            ...prev,
            [name]: value
        }));

    };

    const handleCompanyChange = (e) => {

        const { name, value } = e.target;

        setCompany((prev) => ({
            ...prev,
            [name]: value
        }));

    };

    const handleRecruiterPhoto = (e) => {

        setRecruiter((prev) => ({
            ...prev,
            profile_photo: e.target.files[0]
        }));

    };

    const handleCompanyLogo = (e) => {

        setCompany((prev) => ({
            ...prev,
            logo_url: e.target.files[0]
        }));

    };

    const handleRecruiterSave =
        async () => {
            if (!profile) return;

            try {

                let photoUrl =
                    recruiter.profile_photo;

                if (
                    recruiter.profile_photo instanceof File
                ) {

                    photoUrl =
                        await uploadRecruiterPhoto(
                            recruiter.profile_photo
                        );

                }

                await updateRecruiter(
                    profile.id,
                    {
                        ...recruiter,
                        profile_photo: photoUrl
                    }
                );
                toast.success(
                    "Recruiter updated successfully"
                );

            } catch (error) {

                console.error(error);

                toast.error(
                    error.response?.data?.message ||
                    "Something went wrong"
                );

            }

        };

    const handleCompanySave =
        async () => {
            if (!profile) return;

            try {

                let logoUrl =
                    company.logo_url;

                if (
                    company.logo_url instanceof File
                ) {

                    logoUrl =
                        await uploadCompanyLogo(
                            company.logo_url
                        );

                }

                await updateCompany(
                    profile.company_id,
                    {
                        ...company,
                        logo_url: logoUrl
                    }
                );
                toast.success(
                    "Company updated successfully"
                );

            } catch (error) {

                console.error(error);

                toast.error(
                    error.response?.data?.message ||
                    "Something went wrong"
                );

            }

        };


    if (loading) {

        return (
            <h2>
                Loading...
            </h2>
        );

    }

    return (

        <div className="edit-company-page">

            <section className="edit-company-hero">

                <h1>Edit Profile</h1>

                <p>
                    Manage recruiter and company information.
                </p>

            </section>

            <div className="edit-company-container">

                {/* Recruiter Information */}

                <section className="edit-card">

                    <h2>Recruiter Information</h2>

                    <div className="form-grid">

                        <div className="form-group">

                            <label>Name *</label>

                            <input
                                type="text"
                                name="name"
                                value={recruiter.name}
                                onChange={handleRecruiterChange}
                                placeholder="John Smith"
                            />

                        </div>

                        <div className="form-group">

                            <label>Designation *</label>

                            <input
                                type="text"
                                name="designation"
                                value={recruiter.designation}
                                onChange={handleRecruiterChange}
                                placeholder="Senior Talent Acquisition"
                            />

                        </div>

                        <div className="form-group full-width">

                            <label>LinkedIn</label>

                            <input
                                type="text"
                                name="linkedin"
                                value={recruiter.linkedin}
                                onChange={handleRecruiterChange}
                                placeholder="linkedin.com/in/johnsmith"
                            />

                        </div>

                        <div className="form-group full-width">

                            <label>Profile Photo</label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleRecruiterPhoto}
                            />

                            {
                                recruiter.profile_photo && (
                                    <img
                                        src={
                                            recruiter.profile_photo instanceof File
                                                ? URL.createObjectURL(
                                                    recruiter.profile_photo
                                                )
                                                : recruiter.profile_photo
                                        }
                                        alt="Recruiter"
                                        className="preview-image"
                                    />
                                )
                            }

                        </div>


                    </div>

                    <button
                        className="primary-btn"
                        onClick={handleRecruiterSave}
                    >
                        Save Recruiter
                    </button>

                </section>

                {/* Company Information */}

                <section className="edit-card">

                    <h2>Company Information</h2>

                    <div className="form-grid">

                        <div className="form-group">

                            <label>Company Name *</label>

                            <input
                                type="text"
                                name="company_name"
                                value={company.company_name}
                                onChange={handleCompanyChange}
                                placeholder="Google"
                            />

                        </div>

                        <div className="form-group">

                            <label>Industry</label>

                            <input
                                type="text"
                                name="industry"
                                value={company.industry}
                                onChange={handleCompanyChange}
                                placeholder="Technology"
                            />

                        </div>

                        <div className="form-group">

                            <label>Location</label>

                            <input
                                type="text"
                                name="location"
                                value={company.location}
                                onChange={handleCompanyChange}
                                placeholder="Bangalore"
                            />

                        </div>

                        <div className="form-group">

                            <label>Website</label>

                            <input
                                type="text"
                                name="website"
                                value={company.website}
                                onChange={handleCompanyChange}
                                placeholder="https://google.com"
                            />

                        </div>

                        <div className="form-group full-width">

                            <label>Company Logo</label>

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleCompanyLogo}
                            />

                            {
                                company.logo_url && (
                                    <img
                                        src={
                                            company.logo_url instanceof File
                                                ? URL.createObjectURL(
                                                    company.logo_url
                                                )
                                                : company.logo_url
                                        }
                                        alt="Company Logo"
                                        className="preview-image"
                                    />
                                )
                            }

                        </div>

                    </div>

                    <button
                        className="primary-btn"
                        onClick={handleCompanySave}
                    >
                        Save Company
                    </button>

                </section>

                {/* About Company */}

                <section className="edit-card">

                    <h2>About Company</h2>

                    <div className="form-group">

                        <textarea
                            rows="7"
                            name="description"
                            value={company.description}
                            onChange={handleCompanyChange}
                            placeholder="Write about your company..."
                        />

                    </div>

                    <button
                        className="primary-btn"
                        onClick={handleCompanySave}
                    >
                        Save Description
                    </button>

                </section>

            </div>

        </div>

    );
};

export default EditRecruiterCompany;    