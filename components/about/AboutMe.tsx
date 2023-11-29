import Link from '@/components/Link'
const AboutMe = () => {
  return (
    <section>
      <h2 id='about' className='scroll-margin-nav'>
        <Link className='text-3xl' href='#about'>
          About
        </Link>
      </h2>
      <p>
        Hello, my name is <b>Rizan Qardafil</b>, you can call me <b>Rizan</b>.
      </p>
      <p>
        I grew up in a small village located in{' '}
        <Link
          className='underline'
          isExternal
          href='https://www.google.com/search?q=kuantan+singingi'
        >
          Inuman, Kuantan Singingi, Riau
        </Link>
        . Graduated from{' '}
        <Link className='underline' isExternal href='https://www.uii.ac.id/'>
          Islamic Indonesia of University
        </Link>{' '}
        with a Bachelor&apos;s degree in Informatics (Computer science) and
        currently working as a <i>Software Engineer</i> (you maybe more familiar
        with &quot;Md. Software Engineer&quot;) at{' '}
        <Link className='underline' href='https://www.sociolla.com/' isExternal>
          Sociolla
        </Link>
        . I was previously working as a Software engineer at a Big-Company
        called{' '}
        <Link className='underline' href='https://www.mnc.co.id/id' isExternal>
          MNC Media
        </Link>
        .
      </p>
      <p>
        A passionate Frontend Engineer with a love for teaching. That&apos;s why
        I&apos;ve joined ADPList as a mentor to provide accessible mentorship to
        everyone. Through my mentorship, I aim to share my knowledge and
        expertise with other developers to help them achieve their goals.
      </p>
      <p>
        In addition to being a mentor, I&apos;m also a writer on Twitter where I
        share my journey and insights related to tech. I&apos;m always eager to
        share my thoughts on the latest trends in the industry and engage with
        other like-minded individuals.
      </p>

      <p>
        Furthermore, I&apos;m also open to opportunities to speak at events and
        conferences . If you&apos;re interested in working with me as a mentor
        or speaker, please feel free to reach out to me via DM or email to
        inquire about potential business opportunities
      </p>
      <p>
        Outside of software developing thingy, I love playing and{' '}
        <Link
          isExternal
          className='underline'
          href='https://open.spotify.com/user/fy7cl2uhcmaz5o0k0o0r6uwh7?si=b8084f2893b240f5'
        >
          listening music
        </Link>
        .
      </p>
    </section>
  )
}

export default AboutMe
