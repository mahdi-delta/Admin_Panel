const InfoRow = ({ icon, label, value }) => (
     <div className="flex items-start justify-between text-slate">
          <div className="text-left flex-grow">
               <p className="text-gray-500 text-sm">{label}:</p>
               <p className="font-medium text-white/80 break-words">{value}</p>
          </div>
          <span className="text-xl text-white/80 flex-shrink-0">{icon}</span>
     </div>
);

export default InfoRow;

