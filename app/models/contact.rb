class Contact < MailForm::Base
    attribute :title,      :validate => true
    attribute :email,     :validate => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  
    attribute :nickname,  :captcha  => true
  
    # Declare the e-mail headers. It accepts anything the mail method
    # in ActionMailer accepts.
    def headers
     full_name = "#{Tutor.last.firstname} #{Tutor.last.lastname}"
    
     tutor_mail = Tutor.last.email
      {
        :subject => "You have been invited to take on the assessment",
        :to => "#{email}",
        :cc => "moryno8626@gmail.com",
        :from => %("#{full_name}" <#{tutor_mail}>)
      }
    end
  end
  