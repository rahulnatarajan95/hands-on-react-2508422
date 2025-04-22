import { useState } from "react";

export default ({ member, handleClose, cast }) => {
  const [memberInfo, setMemberInfo] = useState(member);
  const nextMember = (member) => {
    const newId = member.id + 1;
    const findId = newId < cast.length ? newId : 0;
    const newMember = cast.filter((castMember) => {
      return castMember.id === findId;
    });
    setMemberInfo(newMember[0]);
  };
  const previousMember = (member) => {
    const newId = member.id;
    const findId = newId === 0 ? cast.length - 1 : newId - 1;
    const newMember = cast.filter((castMember) => {
      return castMember.id === findId;
    });
    setMemberInfo(newMember[0]);
  };
  return (
    <dialog id="modal-member" open>
      <article>
        <a
          href="#close"
          aria-label="Close"
          className="close"
          data-target="modal-member"
          onClick={handleClose}
        ></a>
        <hgroup>
          <div
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <img
              style={{ width: "200px" }}
              src={`images/${memberInfo.slug}.svg`}
              alt={memberInfo.name}
            />
            <hgroup>
              <h1>{memberInfo.name}</h1>
              <p>{memberInfo.bio}</p>
            </hgroup>
          </div>
        </hgroup>
        <footer>
          <button onClick={() => nextMember(memberInfo)} className="secondary">
            Next
          </button>
          <button onClick={() => previousMember(memberInfo)}>Previous</button>
        </footer>
      </article>
    </dialog>
  );
};
