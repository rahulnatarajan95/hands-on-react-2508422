export default ({ cast, onChoice }) => {
  return (
    <nav>
      <ul>
        <li>
          <details className="dropdown">
            <summary>Cast</summary>
            <ul>
              <li>
                {cast.map((member) => (
                  <a
                    key={member.id}
                    onClick={() => {
                      onChoice(member);
                    }}
                  >
                    {member.name}
                  </a>
                ))}
              </li>
            </ul>
          </details>
        </li>
        <li>
          <img style={{ width: "50px" }} src={`images/logo_stargazers.svg`} />
        </li>
      </ul>
    </nav>
  );
};
