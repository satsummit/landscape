# Title: Liquid Widont
# Authors: Olaf Veerman - olaf@flipside.org
# URL: https://github.com/flipside-org/liquid-widont
#
# Description: Provides a Liquid Filter that prevents widows on texts by replacing the space between the last two words with a non-breaking space.
#
# Example: {{ post.title | widont }}
#
# Allows you to turn this:
# | You have to see it to believe |
# | it                            |
#
# into this:
# | You have to see it to         |
# | believe it                    |

require 'liquid'

module PreventWidow
  def widont(text, breakBefore = 18)

    text = text.gsub(/&nbsp;([^\s]+)$/, ' \1')
    s = text.split(' ')

    if s.length > 1
      l = s.length
      breakLength = (s[l - 1] + ' ' + s[l - 2]).length

      if breakBefore == 'always' || breakLength < breakBefore
        return text.gsub(/\s([^\s]+)\s*$/, '&nbsp;\1')
      end
    end

    return text
  end
end

Liquid::Template.register_filter(PreventWidow)