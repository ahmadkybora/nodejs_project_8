const mongoose = require('mongoose');
const Yup = require("yup");
const bcrypt = require('bcrypt');

const EmployeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'نام الزامی است'],
        trim: true,
    },
    last_name: {},
    username: {},
    email: {},
    password: {},
});

const userRequestValidation = Yup.object().shape({
    first_name: Yup.string()
        .min(4, "نام نباید کمتر از 4 حرف باشد")
        .max(255, "نام نباید بیشتر از 255 حرف باشد")
        .required("نام الزامی است"),

    last_name: Yup.string()
        .min(4, "نام خانوادگی نباید کمتر از 4 حرف باشد")
        .max(255, "نام خانوادگی نباید بیشتر از 255 حرف باشد")
        .required("نام خانوادگی الزامی است"),

    email: Yup.string()
        .email("ایمیل اشتباه است")
        .required("ایمیل الزامی است"),

    password: Yup.string()
        .min(8, "رمز عبور نباید کمتر از 8 حرف باشد")
        .max(255, "رمز عبور نباید کمتر از 255 حرف باشد")
        .required("رمز عبور الزامی است"),

    confirmation_password: Yup.string()
        .required("پسورد مطابقت ندارد")
        .oneOf([Yup.ref("password"), null, "پسورد مطابقت ندارد"]),
});

EmployeeSchema.statics.userValidation = function(body){
    return userRequestValidation.validate(body, {abortEarly: false});
};

EmployeeSchema.pre("save", function(next){
    let employee = this;

    if (!employee.isModified("password")) return next();

    bcrypt.hash(employee.password, 10, (err, hash) => {
        if(err) return next(err);

        employee.password = hash;
        next();
    })
});

const Employee = mongoose.model("Employee", EmployeeSchema);

module.exports = Employee;
