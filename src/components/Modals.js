export default function Modals({ showModal, setShowModal }) {
  return (
    <div
      className={`modal-bg flex align justify ${showModal != "" ? "show" : ""}`}
    >
      <div className="modal-container flex align">
        <div className="modal-text">
          <div className="modal-inner-container">
            {showModal === "contact" ? (
              `Looks like you’re interested in taking the first step. Whether you need Reentry to Recovery or Workforce content, our reentry strategy will guide you toward a more successful career path and provide you with support content along the way.`
            ) : showModal === "refund" ? (
              "A refund must be requested within three days of the purchase date."
            ) : showModal === "Recovery" ? (
              <>
                <b>Course content includes:</b> Asking for Help, Forming Good
                Habits, Rebuilding Your Life From Rock Bottom, Reducing Stress,
                Steps to Daily Happiness, Copying With Anxiety and Depression,
                Dealing With Domestic Violence, How to Quit Smoking, Manager
                Anger, Say No to Drugs, Conflict Resolution, Sexual Harassment,
                and Bullying.
              </>
            ) : showModal === "Workforce Integration" ? (
              <>
                <b>Course content includes:</b> Applying for the Job You Want,
                Creating an Attention-Grabbing Resume, Creating a Cover Page,
                Finding a Job Online, Finding a Job Without a Highschool
                Diploma, Introducing Yourself in a Job Interview, How to Join
                the Military, Felon-Friendly Jobs, Become a Personal Trainer,
                Become an Emergency Medical Technician, Carpenter and Other
                Related Jobs, Checks and Checking Accounts, Construction and
                Other Jobs, Drywall, Ceiling Tile, and Roofer, How to Get a
                Driver's License - Personal and Commercial, Janitor and
                Housekeeper Skills, Outdoor Maintenance Jobs, How to Become a
                Firefighter, and Workplace Ethics.
              </>
            ) : showModal === "Health & Wellness" ? (
              <>
                <b>Course content includes:</b> Loneliness and Depression,
                Self-Care Management, Types of Anxiety Disorders, Substance
                Abuse, What is ADD?, Fears and Phobias, Helpful Habits,
                Meditate, Panic Disorder, Understanding Dementia, Borderline
                Personality Disorder, and Marijuana Education.
              </>
            ) : showModal === "Personal Finance" ? (
              <>
                <b>Course content includes:</b> Buying a Car, Checks and
                Checking Accounts, Get a Free Credit Report, Improving Your
                Credit, Leasing a Car, Online Payment Apps Safety, Repairing
                Your Credit, and Monthly Budgeting.
              </>
            ) : showModal === "Parenting" ? (
              <>
                <b>Course content includes:</b> Balancing Work and Parenting,
                Balance Work and Being a Single Parent, Daycare, Improving Your
                Parenting Skills, Meal Planning, Babysitting, Parenting Tips for
                Infants (0-1 year), Parenting Tips for Toddlers (1-2 years),
                Parenting Tips for Toddlers (2-3 years), Parenting Tips for
                Preschoolers (3-5 years), Parenting Tips for Middle Childhood
                (6-8 years), Parenting Tips for Middle Childhood (9-11 years),
                Parenting Tips for Young Teens (12-14 years), and Parenting Tips
                for Older Teens (15-17 years).
              </>
            ) : showModal === "GED Study Guide" ? (
              <>
                <b>Course content includes:</b> Study Guide, Language Arts,
                Math, Science, and Social Studies.
              </>
            ) : showModal === "Legal Information" ? (
              <>
                <b>Course content includes:</b> Expungement (50 states),
                Expungement Overview, and Sealing a Criminal Record.
              </>
            ) : showModal === "Cover Letter & Resume" ? (
              <>
                <b>Course content includes:</b> Cover Letter Tips, Creating a
                Cover Page, Creating an Attention-Grabbing Resume, How to Answer
                Interview Questions, How to Introduce Yourself in a Job
                Interview, Interview Training, Resume Writing Sample Checklist,
                Resume Writing Checklist, and Resume Writing Handout.
              </>
            ) : showModal === "Education Study Guide" ? (
              <>
                <b>Course content includes:</b> How to Write "Real Good",
                English Glossary, English Skills, Grammar and Punctuation,
                Grammar and Punctuation Puzzles, Non-Verbal Observational Skills
                1 & 2, Poetry - A Time to Remember, Spelling and Vocabulary
                Puzzles, Synonyms Word Search, Verbal Reasoning Crosswords,
                Verbal Reasoning Test, Vocabulary Terms 1 & 2, Addition,
                Fractions, Math Puzzles, Math Test, Multiplication, Subtraction,
                Math Glossary, Mathematics Vocabulary Terms, Written Addition,
                Written Division, Written Multiplication, and Science Glossary.
              </>
            ) : showModal === "Online Education" ? (
              <>
                <b>Course content includes:</b> Online Education.
              </>
            ) : showModal === "Galleries" ? (
              <>
                <b>Course content includes:</b> Animals, Ocean, Kentucky,
                Mountains, National Parks, California, Quotes, Travel, and
                Fashion.
              </>
            ) : showModal === "Helpful Links & Videos" ? (
              <>
                <b>Course content includes:</b> Dozens of links and videos to
                help with reentering life outside of incarceration.
              </>
            ) : (
              ""
            )}
          </div>
        </div>

        <button onClick={() => setShowModal("")}>
          <svg viewBox="0 0 32 32">
            <path d="M21.835,16l7.588-7.588C29.806,8.029,30,7.479,30,7c0-0.335-0.092-0.923-0.57-1.401L26.4,2.57C25.923,2.092,25.335,2,25,2  c-0.479,0-1.029,0.194-1.412,0.576L16,10.165L8.412,2.576C8.029,2.194,7.479,2,7,2C6.665,2,6.077,2.092,5.6,2.57l-3.03,3.03  C2.092,6.077,2,6.665,2,7c0,0.479,0.194,1.029,0.576,1.412L10.165,16l-7.588,7.588C2.194,23.971,2,24.521,2,25  c0,0.335,0.092,0.923,0.57,1.4l3.03,3.03C6.077,29.908,6.665,30,7,30c0.479,0,1.029-0.194,1.412-0.576L16,21.835l7.588,7.588  C23.971,29.806,24.521,30,25,30c0.335,0,0.923-0.092,1.4-0.57l3.03-3.03C29.908,25.923,30,25.335,30,25  c0-0.479-0.194-1.029-0.576-1.412L21.835,16z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
