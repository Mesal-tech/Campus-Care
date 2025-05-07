// emailTemplates.ts

interface MeetingDetails {
  date: string;
  time: string;
  counselor: string;
  student: string;
  note: string;
}

export const getStudentEmailTemplate = (meetingDetails: MeetingDetails) => {
  return {
    subject: `Your Counseling Appointment Confirmation - ${meetingDetails.date} at ${meetingDetails.time}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2c3e50;">Dear ${meetingDetails.student},</h2>
        <p>We are pleased to confirm your counseling appointment with ${meetingDetails.counselor}. Below are the details of your scheduled session:</p>
        
        <h3 style="color: #2c3e50;">Appointment Details</h3>
        <ul style="list-style-type: none; padding: 0;">
          <li><strong>Date:</strong> ${meetingDetails.date}</li>
          <li><strong>Time:</strong> ${meetingDetails.time}</li>
          <li><strong>Counselor:</strong> ${meetingDetails.counselor}</li>
          <li><strong>Student:</strong> ${meetingDetails.student}</li>
          <li><strong>Note:</strong> ${meetingDetails.note}</li>
        </ul>
        
        <h3 style="color: #2c3e50;">What to Expect</h3>
        <ul style="list-style-type: disc; padding-left: 20px;">
          <li>You will receive a calendar invite shortly with a link to join the session.</li>
          <li>Please ensure you are in a quiet, private space for the duration of the appointment.</li>
          <li>If you need to cancel or reschedule, kindly notify us at least 24 hours in advance as per our cancellation policy.</li>
        </ul>
        
        <p>Should you have any questions or require further assistance, please do not hesitate to contact us at <a href="mailto:support@example.com" style="color: #3498db;">support@example.com</a>.</p>
        
        <p>We look forward to supporting you in your counseling journey.</p>
        
        <p style="margin-top: 30px;">Best regards,<br />
        Counseling Services Team<br />
        <a href="mailto:support@example.com" style="color: #3498db;">support@example.com</a><br />
        <a href="https://www.counselingservices.com" style="color: #3498db;">www.counselingservices.com</a></p>
      </div>
    `,
  };
};

export const getCounselorEmailTemplate = (meetingDetails: MeetingDetails) => {
  return {
    subject: `New Appointment Booking - ${meetingDetails.student} on ${meetingDetails.date} at ${meetingDetails.time}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #2c3e50;">Dear ${meetingDetails.counselor},</h2>
        <p>A student has scheduled a counseling appointment with you. Please find the details below:</p>
        
        <h3 style="color: #2c3e50;">Appointment Details</h3>
        <ul style="list-style-type: none; padding: 0;">
          <li><strong>Student:</strong> ${meetingDetails.student}</li>
          <li><strong>Date:</strong> ${meetingDetails.date}</li>
          <li><strong>Time:</strong> ${meetingDetails.time}</li>
          <li><strong>Counselor:</strong> ${meetingDetails.counselor}</li>
          <li><strong>Note from Student:</strong> ${meetingDetails.note}</li>
        </ul>
        
        <h3 style="color: #2c3e50;">Next Steps</h3>
        <ul style="list-style-type: disc; padding-left: 20px;">
          <li>A calendar invite with the session link has been sent to your email.</li>
          <li>Please review any notes provided by the student to prepare for the session.</li>
          <li>If you need to reschedule or cancel, kindly inform us at least 24 hours in advance.</li>
        </ul>
        
        <p>Should you have any questions or require additional information, please contact <a href="mailto:admin@example.com" style="color: #3498db;">admin@example.com</a>.</p>
        
        <p>Thank you for your continued dedication to supporting our students.</p>
        
        <p style="margin-top: 30px;">Best regards,<br />
        Counseling Services Team<br />
        <a href="mailto:admin@example.com" style="color: #3498db;">admin@example.com</a><br />
        <a href="https://www.counselingservices.com" style="color: #3498db;">www.counselingservices.com</a></p>
      </div>
    `,
  };
};