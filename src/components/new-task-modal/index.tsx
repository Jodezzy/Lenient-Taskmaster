import React, { useState, useEffect } from "react";
import "./style.scss";

interface NewTaskModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (formData: {
        name: string;
        details: string;
        category: string;
        task_type: string;
        deadline: string;
        leniency: string;
    }) => void;
}

const NewTaskModal: React.FC<NewTaskModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        details: "",
        category: "",
        task_type: "work",
        deadline: "",
        leniency: "asap",
    });

    const [categories, setCategories] = useState<string[]>([]);
    const [newCategory, setNewCategory] = useState("");

    useEffect(() => {
        const handleKeyDown = (e:any) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    const handleInputChange = (e:any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleTaskTypeChange = (e:any) => {
        setFormData((prev) => ({
            ...prev,
            task_type: e.target.checked ? "passion" : "work",
        }));
    };

    const handleAddCategory = () => {
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory]);
            setNewCategory("");
        }
    };

    const handleDeleteCategory = (categoryToDelete:string) => {
        setCategories(categories.filter((cat) => cat !== categoryToDelete));
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        if (!formData.name) {
            alert("Please fill in the required fields");
            return;
        }
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">New Task</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="details">Details</label>
                        <textarea
                            id="details"
                            name="details"
                            value={formData.details}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <div className="category-select">
                            <select
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={(e) => {
                                    if (e.target.value === "add_new") {
                                        const newCategory = prompt(
                                            "Enter new category name:"
                                        );
                                        if (
                                            newCategory &&
                                            !categories.includes(newCategory)
                                        ) {
                                            setCategories([
                                                ...categories,
                                                newCategory,
                                            ]);
                                            setFormData((prev) => ({
                                                ...prev,
                                                category: newCategory,
                                            }));
                                        }
                                    } else {
                                        handleInputChange(e);
                                    }
                                }}
                            >
                                <option value="">Select a category</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                                <option value="add_new">
                                    + Add New Category
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="task-settings-container">
                        <div className="form-group">
                            <div className="task-type-switch">
                                <span
                                    className={
                                        formData.task_type === "work"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Work
                                </span>
                                <label className="switch">
                                    <input
                                        type="checkbox"
                                        checked={
                                            formData.task_type === "passion"
                                        }
                                        onChange={handleTaskTypeChange}
                                    />
                                    <span className="slider"></span>
                                </label>
                                <span
                                    className={
                                        formData.task_type === "passion"
                                            ? "active"
                                            : ""
                                    }
                                >
                                    Passion
                                </span>
                            </div>
                        </div>

                        {formData.task_type === "work" ? (
                            <div className="form-group">
                                <label htmlFor="deadline">Deadline</label>
                                <input
                                    type="date"
                                    id="deadline"
                                    name="deadline"
                                    value={formData.deadline}
                                    onChange={handleInputChange}
                                />
                            </div>
                        ) : (
                            <div className="form-group">
                                <label>Leniency</label>
                                <div className="leniency-buttons">
                                    {["asap", "soon", "eventually"].map(
                                        (option) => (
                                            <button
                                                key={option}
                                                type="button"
                                                className={`leniency-button ${
                                                    formData.leniency === option
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        leniency: option,
                                                    }))
                                                }
                                            >
                                                {option
                                                    .charAt(0)
                                                    .toUpperCase() +
                                                    option.slice(1)}
                                            </button>
                                        )
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="modal-footer">
                        <button type="button" onClick={onClose}>
                            Cancel
                        </button>
                        <button type="submit">Create Task</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewTaskModal;
