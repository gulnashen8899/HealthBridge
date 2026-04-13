import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './p.jpg'
import contact_image from './contact_image.png'
import about_image from './about.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General Physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Anisha Sukhla',
        rating:4.9 ,
        image: doc1,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '7 Years',
        about: 'Dr. Anisha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Anisha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Max Hospital, Gurgaon'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Neena Mohil',
        rating:4.7 ,
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '9 Years',
        about: 'Dr. Neena has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Neena has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 700,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'PSRI hospital, New Delhi'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Saksham Patel',
        rating:4.8,
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '7 Years',
        about: 'Dr. Saksham has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Saksham has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 900,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Fortis Hospital, Banglore'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Shivam Kumar',
        image: doc4,
        rating:4.6,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '7 Years',
        about: 'Dr. Shivam has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Shivam has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 700,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Aster CMI hospital, Bengaluru'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        rating:4.6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Jennifer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Jennifer has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'HN hospital, Mumbai'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Gaurav Singh',
        image: doc6,
        rating:4.9,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Gaurav has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Gaurav has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 700,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Parel Hospital, Kolkata'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Anita Singhania',
        image: doc7,
        rating:4.9,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '6 Years',
        about: 'Dr. Anita has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Anita has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 900,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Foris Hospital, kerala'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Risabh chaddha',
        image: doc8,
        rating:4.7,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Risabh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Risabh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 600,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'SVR hospital, Delhi'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Reema singh',
        image: doc9,
        rating:4.6,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '9 Years',
        about: 'Dr. Reema has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Reema has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Fortis Hospital, Mumbai'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Satyam kumar',
        image: doc10,
        rating:4.7,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '7 Years',
        about: 'Dr. Satyam has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 700,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, Mumbai'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Ansikha Singh',
        image: doc11,
        rating:4.8,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Ansikha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Ansikha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 700,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, Mumbai'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Aditya Sharma',
        image: doc12,
        rating:4.8,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Aditya has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Aditya has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 800,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, Mumbai'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Tanisha Kumari',
        image: doc13,
        rating:4.5,
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Tanisha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Tanisha has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 700,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Mumbai'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Singh',
        image: doc14,
        rating:4.9,
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Ryan has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 600,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Fortis Hospital, Mumbai'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        rating:4.9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '8 Years',
        about: 'Dr. Amelia has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 700,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'SV Hospital, Mumbai'
        }
    },
]