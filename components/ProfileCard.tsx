'use client';

import React from 'react';
import Image from 'next/image';

const ProfileCard: React.FC = () => {

    const socialLinks = [
        {
            name: 'Email',
            href: 'mailto:watchain.yamm@sbac.ac.th',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
            ),
            color: 'text-red-400 hover:text-red-300'
        },
        {
            name: 'Facebook',
            href: 'https://facebook.com/alexjohnson',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M20 10C20 4.477 15.523 0 10 0S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
            ),
            color: 'text-blue-600 hover:text-blue-500'
        },
        //TODO: Add more social links here
    ];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-10 opacity-30">
                    <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </div>
            </div>

            {/* Main Profile Card */}
            <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
                <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center items-center text-center">

                    {/* Profile Section */}
                    <div className="mb-4">
                        {/* Avatar */}
                        <div className="w-36 h-36 mx-auto mb-2 relative">
                            {/* //TODO: Replace with actual profile picture */}
                            <Image
                                src="/Jin.jpg"
                                alt="Profile"
                                fill
                                className="rounded-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full animate-ping opacity-20"></div>
                        </div>

                        {/* Name and Title */}
                        {/* //TODO: Replace with actual name and title */}
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                            Haijin
                        </h1>
                        <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full text-blue-200 text-sm sm:text-base border border-blue-400/30  mb-1">
                            Aimer
                        </div>

                        {/* Contact Information */}
                        {/* //TODO: Replace with actual contact information */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm sm:text-base">watcharin.yamm@sbacnon.ac.th</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-medium text-sm sm:text-base">+66 (094) 605-7209</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* About Section */}
                    {/* //TODO: Replace with actual bio */}
                    <div className="max-w-xl mb-2">
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                            YT Haijin_Aimers IG Haijin_O X Haijin_Aim
                        </p>
                    </div>

                    {/* Social Links */}
                    {/* //TODO: Add more social links here */}
                    <div className="space-y-2 mb-4">
                        <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
                        <div className="flex justify-center space-x-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-2 bg-white/10 rounded-lg border border-white/20 hover:border-white/40 ${link.color} transition-all duration-300 transform hover:scale-110`}
                                    title={link.name}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Start Chatting Button */}
                    <div className="pt-4 border-t border-white/20 max-w-xl w-full">
                        <a
                            href="/chat"
                            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 backdrop-blur-sm rounded-full text-white font-semibold text-sm sm:text-base border border-blue-400/50 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                        >
                            Start Chatting
                        </a>
                    </div>
                </div>
            </div>

            {/* Mark component directly embedded */}
            <div className="absolute bottom-0 left-0 right-0 py-4 z-[60]">
                <p className="text-center text-sm text-white opacity-90 bg-black/20 rounded-lg mx-4 py-2">
                    <a href="https://peamz4.in.th" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors">peamz4</a> X BU OPENHOUSE 2025
                </p>
            </div>
        </div>
    );
};

export default ProfileCard;
