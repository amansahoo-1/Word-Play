import React from "react";

export default function Alert({ alert }) {
  if (!alert) return null; // Don't render if there's no alert

  return (
    <div style={{ height: "2rem" }}>
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{alert.type.toUpperCase()}</strong>: {alert.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}
