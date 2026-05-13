
import React, { useState } from 'react';
import "../styles/schedule.css";

const ScheduleManagement = () => {

    const [appointments, setAppointments] = useState({

        Sunday: [
            {
                patient: 'Johnathan Reed',
                time: '09:00 AM',
                reason: 'Post-op follow up',
                urgent: false
            },
            {
                patient: 'Maria Garcia',
                time: '10:30 AM',
                reason: 'Persistent cough',
                urgent: true
            }
        ],

        Monday: [
            {
                patient: 'Sam Wilson',
                time: '08:15 AM',
                reason: 'Annual physical',
                urgent: false
            },
            {
                patient: 'Linda Carter',
                time: '01:00 PM',
                reason: 'Blood test results',
                urgent: false
            },
            {
                patient: 'Robert Fox',
                time: '03:45 PM',
                reason: 'Joint pain review',
                urgent: false
            }
        ],

        Tuesday: [
            {
                patient: 'David Miller',
                time: '11:00 AM',
                reason: 'Severe migraine',
                urgent: true
            }
        ],

        Wednesday: [
            {
                patient: 'Emily Blunt',
                time: '09:30 AM',
                reason: 'Prenatal check-up',
                urgent: false
            },
            {
                patient: 'Mark Stevenson',
                time: '02:15 PM',
                reason: 'Skin allergy',
                urgent: false
            }
        ],

        Thursday: [
            {
                patient: 'Sarah Connor',
                time: '10:00 AM',
                reason: 'Persistent cough',
                urgent: false
            },
            {
                patient: 'Kevin Hart',
                time: '11:30 AM',
                reason: 'General malaise',
                urgent: false
            },
            {
                patient: 'Diana Prince',
                time: '04:00 PM',
                reason: 'Lab work review',
                urgent: false
            }
        ]

    });

    const [search, setSearch] = useState('');

    const handleEmergency = () => {
        alert('Emergency Alert Sent Successfully!');
    };

    const addAppointment = () => {

        const patient = prompt('Enter Patient Name');
        const time = prompt('Enter Appointment Time');
        const reason = prompt('Enter Appointment Reason');

        if (!patient || !time || !reason) return;

        const newAppointment = {
            patient,
            time,
            reason,
            urgent: false
        };

        setAppointments(prev => ({
            ...prev,
            Tuesday: [...prev.Tuesday, newAppointment]
        }));
    };

    const totalAppointments = Object.values(appointments)
        .flat()
        .length;

    const urgentCases = Object.values(appointments)
        .flat()
        .filter(item => item.urgent).length;

    const days = [
        {
            key: 'Sunday',
            date: 'Oct 15'
        },
        {
            key: 'Monday',
            date: 'Oct 16'
        },
        {
            key: 'Tuesday',
            date: 'Oct 17'
        },
        {
            key: 'Wednesday',
            date: 'Oct 18'
        },
        {
            key: 'Thursday',
            date: 'Oct 19'
        }
    ];

    return (

        <div className="schedule-page">

            {/* SIDEBAR */}

       

            {/* MAIN CONTENT */}

            <div className="main-content">

                {/* HEADER */}

                <header className="top-header">

                    <div className="search-box">

                        <span className="material-symbols-outlined">search</span>

                        <input
                            type="text"
                            placeholder="Search patients or schedules..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />

                    </div>

                    <div className="doctor-profile">

                        <div>
                            <h4>Dr. Sarah Jenkins</h4>
                            <p>Senior Oncologist</p>
                        </div>

                        <img
                            src="https://i.pravatar.cc/150?img=47"
                            alt="Doctor"
                        />

                    </div>

                </header>

                {/* PAGE HEADER */}

                <section className="page-header">

                    <div>
                        <h2>Weekly Schedule</h2>
                        <p>Oct 15 - Oct 19, 2023</p>
                    </div>

                    <div className="week-buttons">

                        <button className="prev-btn">
                            <span className="material-symbols-outlined">chevron_left</span>
                            Previous Week
                        </button>

                        <button className="next-btn">
                            Next Week
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>

                    </div>

                </section>

                {/* CALENDAR */}

                <section className="calendar-grid">

                    {days.map((day) => (

                        <div className="day-column" key={day.key}>

                            <div className="day-header">
                                <p>{day.key.toUpperCase()}</p>
                                <h3>{day.date}</h3>
                            </div>

                            {
                                appointments[day.key]
                                    .filter(item =>
                                        item.patient
                                            .toLowerCase()
                                            .includes(search.toLowerCase())
                                    )
                                    .map((appointment, index) => (

                                        <div
                                            className={`appointment-card ${appointment.urgent ? 'urgent' : ''}`}
                                            key={index}
                                        >

                                            <div className="appointment-top">

                                                <span className={`time ${appointment.urgent ? 'red' : 'blue'}`}>
                                                    {appointment.time}
                                                </span>

                                                {
                                                    appointment.urgent && (
                                                        <span className="material-symbols-outlined urgent-icon">
                                                            emergency
                                                        </span>
                                                    )
                                                }

                                            </div>

                                            <h4>{appointment.patient}</h4>
                                            <p>{appointment.reason}</p>

                                        </div>

                                    ))
                            }

                            {
                                day.key === 'Tuesday' && (

                                    <div
                                        className="available-slot"
                                        onClick={addAppointment}
                                    >

                                        <span className="material-symbols-outlined">
                                            add_circle
                                        </span>

                                        <p>Slot Available</p>

                                    </div>

                                )
                            }

                        </div>

                    ))}

                </section>

                {/* STATS */}

                <section className="stats-section">

                    <div className="stat-card">

                        <div className="stat-icon blue-bg">
                            <span className="material-symbols-outlined">
                                event_available
                            </span>
                        </div>

                        <div>
                            <p>Total Appointments</p>
                            <h3>{totalAppointments}</h3>
                        </div>

                    </div>

                    <div className="stat-card">

                        <div className="stat-icon cyan-bg">
                            <span className="material-symbols-outlined">
                                person_search
                            </span>
                        </div>

                        <div>
                            <p>New Patients</p>
                            <h3>8</h3>
                        </div>

                    </div>

                    <div className="stat-card">

                        <div className="stat-icon red-bg">
                            <span className="material-symbols-outlined">
                                warning
                            </span>
                        </div>

                        <div>
                            <p>Urgent Cases</p>
                            <h3>{urgentCases}</h3>
                        </div>

                    </div>

                </section>

            </div>

        </div>

    );
};

export default ScheduleManagement;