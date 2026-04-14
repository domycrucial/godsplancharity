import TeamMemberCard from "./TeamMemberCard";


const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'Founder & CEO',
      description: '15 years of humanitarian experience across 20 countries.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDgrsqUogYrP9MScG-j2LetJyCbnwlQVcFN2oq9C7e2ONiwSJZvvm2SJgpw401HuZqKljfVFy26stp4PPXAixzqCjPjieMw3zzy8NM4a5mBsfHkffIhs5RhQOg5YM1zuxL1HihGfC2T1lJdqFwIy7UhJhbdqXe9SQqhyemPt8cJrxlgh9YnEzDLo103Ql5hGL48KmACWKbGMtfIWGnWjEgvCytWKrnadlQ9ngXQX2JTOqWlFDl_J4l1W7c6SQaNzjx82RryVbgnt4E',
      alt: 'Portrait of Sarah Jenkins, Founder, smiling warmly'
    },
    {
      id: 2,
      name: 'Elena Rodriguez',
      role: 'Operations Director',
      description: 'Expert in logistics and large-scale emergency response.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXObC039dBpCotQTq7msjbLbFF0UiiM9vFY2VdBWTsHEjNla9GsUZS_chs-R_ChZnW99iJeqdYZGn5e9caclRi0dGgoM6XudIkgX7d_0AxR-VCgFmvCYiXinRaMUZ-MPEChj3h8w2DnJzCdNXbUtu4ABuXwN7V9b2qFK3LVKTM31jnXX15QN9PdmIBUtlVVFx06ege86QgcvVxUA0olQaMAMl-yD1I1vpuboE2sEzFsYb1w3boRFuMsdhxrskIiOq0xwdnTRhcGhA',
      alt: 'Portrait of Elena Rodriguez, Operations Director'
    },
    {
      id: 3,
      name: 'David Chen',
      role: 'Head of Programs',
      description: 'Passionate about educational development and community building.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsX9_SZRfxD5iEamVhTy3m9V7NAkkLBDI2KPFYdRmZm8br2W42UFAJEpXzOU_vXnnzDOPRwcrgYrt82NVVPHtjzPBPafNDA7T5C5KP92dgTvCNicImy8JtcTTl1lMO1lgTwTkMF3Fr3qIlQmcwuVewyfBueeo3z-a_9gj5qBL8zAMUPDZrfTBgcovYfMvODyyFQ6mJSS4pOaSqp039JuEmWE_IuPm4aQStrDeYBKOIjsIbFFbNFPWlglXncv6zG3PQyMyawmzEJz0',
      alt: 'Portrait of David Chen, Head of Programs'
    },
    {
      id: 4,
      name: 'Maya Williams',
      role: 'Community Outreach',
      description: 'Leading our volunteer network and local partnerships.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJ9_ySEBOGuDkk584lbGnuujNz1iym3HeZ52hSfxFC80DKOPphv4IxNU79ONdsVZw9ToOYikCNc8XNvUDiB2acHxOeBbpLyqVMfWOmcSz7b2KLHfDMIWRmqgOYKaYbTt6RRx0p8t4pdsapAYAHQoSjK8Nen2cXA07i55KPeDONfG9DoKIdRYSUgVPwdcZuWIjdK74PkQlrFSycZxNnbog18QniM9OvoLgy7rdLP1alxNFIxNPY3gHeuu88ilfIJuaI-LoyeL-1-MI',
      alt: 'Portrait of Maya Williams, Community Outreach'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">Meet the Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;