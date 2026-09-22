import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import styles from './Login.module.css';

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    preference: 'All Heritage Delicacies',
    agreed: false
  });

  const [errors, setErrors] = useState({});

  // Input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const phoneRegex = /^(9|7|1)\d{8}$/;
    if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Enter a valid 9-digit Ethiopian mobile number (e.g., 911234567).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!formData.agreed) {
      newErrors.agreed = 'You must agree to the Hospitality Terms & Privacy Guidelines.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      login({
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim()
      });

      navigate(from, { replace: true });
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create Your Mesob House Account</h2>
      <p className={styles.subtitle}>Join our culinary heritage circle in less than a minute.</p>

      <div className={styles.socialRow}>
        <button type="button" className={styles.socialBtn}>
           Telebirr Quick Sign
        </button>
        <button type="button" className={styles.socialBtn}>
           Continue with Google
        </button>
      </div>

      <div className={styles.divider}>Or register with your details</div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>Full Name</label>
          <input
            type="text"
            name="fullName"
            placeholder="e.g. Abebe Bikila or Genet Tadesse"
            value={formData.fullName}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.fullName && <span className={styles.errorMessage}>{errors.fullName}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Ethiopian Mobile Number</label>
          <div className={styles.phoneWrapper}>
            <div className={styles.phonePrefix}>🇪🇹 +251</div>
            <input
              type="text"
              name="phone"
              placeholder="911 234 567"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <span className={styles.phoneHint}>💬 We will send a 4-digit code to verify your Ethiopian mobile number.</span>
          {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="guest@mesobhouse.com"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
        </div>

        <div className={styles.passwordRow}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Minimum 8 characters"
              value={formData.password}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.confirmPassword && <span className={styles.errorMessage}>{errors.confirmPassword}</span>}
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>Primary Dining Preference (Optional)</label>
          <div className={styles.pillsRow}>
            {['All Heritage Delicacies', 'Fasting & Vegan (Tsom)', 'Halal Certified Meat', '100% Pure Teff (Gluten-Free)'].map((pref) => (
              <button
                key={pref}
                type="button"
                className={formData.preference === pref ? styles.activePill : styles.pill}
                onClick={() => setFormData({ ...formData, preference: pref })}
              >
                {pref}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="terms"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
          />
          <label htmlFor="terms">
            I agree to the <a href="#terms">Mesob House Hospitality Terms</a> and <a href="#privacy">Privacy Guidelines</a>.
          </label>
        </div>
        {errors.agreed && <span className={styles.errorMessage}>{errors.agreed}</span>}

        <button type="submit" className={styles.submitBtn}>
          Create Account & Receive Welcome Gursha →
        </button>
      </form>

      <p className={styles.footerText}>
        Already part of our dining family? <button type="button" className={styles.signInLink}>Sign in here</button>
      </p>
    </div>
  );
}

export default Login;